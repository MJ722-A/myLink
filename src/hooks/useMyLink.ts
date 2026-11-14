"use client";

import { useState, useEffect, useCallback } from "react";
import { MyLinkStoreData } from "@/types/link";
import { INITIAL_STORE_DATA } from "@/data/initialData";

const STORAGE_KEY = "MYLINK_DATA_V1";

export function useMyLink() {
  const [data, setData] = useState<MyLinkStoreData>(INITIAL_STORE_DATA);
  const [isLoaded, setIsLoaded] = useState(false);

  // 로컬스토리지에서 데이터 로드 & 없으면 초기 시딩
  const loadData = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as MyLinkStoreData;
        setData(parsed);
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STORE_DATA));
        setData(INITIAL_STORE_DATA);
      }
    } catch (e) {
      console.warn("LocalStorage access failed, using initial mock data:", e);
      setData(INITIAL_STORE_DATA);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    loadData();

    // 개발자도구 등 다른 탭/창에서 로컬스토리지가 변경되었을 때 즉시 반영
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setData(JSON.parse(e.newValue));
        } catch {
          // ignore error
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [loadData]);

  // 클릭 수 증가 처리
  const recordClick = useCallback((id: string) => {
    setData((prev) => {
      const updatedLinks = prev.links.map((link) =>
        link.id === id ? { ...link, clicks: (link.clicks || 0) + 1 } : link
      );
      const nextData: MyLinkStoreData = {
        ...prev,
        links: updatedLinks,
      };

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextData));
      } catch (err) {
        console.error("Failed to update clicks in localStorage:", err);
      }

      return nextData;
    });
  }, []);

  // 시연용 초기화
  const resetToInitial = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STORE_DATA));
      setData(INITIAL_STORE_DATA);
    } catch (err) {
      console.error("Failed to reset localStorage:", err);
    }
  }, []);

  return {
    data,
    isLoaded,
    recordClick,
    resetToInitial,
  };
}
