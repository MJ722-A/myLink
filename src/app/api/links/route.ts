import { NextRequest, NextResponse } from "next/server";
import mockData from "@/mock/links.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category"); // 'project', 'social', etc.
  const query = searchParams.get("query")?.toLowerCase(); // 검색어
  const sort = searchParams.get("sort") || "order"; // 'order' | 'clicks' | 'latest'
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  let filtered = [...mockData.data];

  // 1. 카테고리 필터링
  if (category && category !== "all") {
    filtered = filtered.filter((item) => item.category === category);
  }

  // 2. 검색어 필터링 (제목, 설명, 태그)
  if (query) {
    filtered = filtered.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchDesc = item.description?.toLowerCase().includes(query) ?? false;
      const matchTags = item.tags?.some((tag) => tag.toLowerCase().includes(query)) ?? false;
      return matchTitle || matchDesc || matchTags;
    });
  }

  // 3. 정렬
  if (sort === "clicks") {
    filtered.sort((a, b) => b.clicks - a.clicks);
  } else if (sort === "latest") {
    filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else {
    filtered.sort((a, b) => a.order - b.order);
  }

  // 4. 페이지네이션
  const totalCount = filtered.length;
  const totalPages = Math.ceil(totalCount / limit);
  const startIndex = (page - 1) * limit;
  const paginatedData = filtered.slice(startIndex, startIndex + limit);

  return NextResponse.json({
    success: true,
    code: 200,
    message: "링크 목록을 성공적으로 조회했어요",
    data: paginatedData,
    meta: {
      categories: mockData.meta.categories,
    },
    pagination: {
      page,
      limit,
      totalCount,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.url) {
      return NextResponse.json(
        {
          success: false,
          code: 400,
          message: "제목과 URL은 필수 입력 항목이에요",
        },
        { status: 400 }
      );
    }

    const newLink = {
      id: `link-${Date.now()}`,
      title: body.title,
      description: body.description || "",
      url: body.url,
      category: body.category || "other",
      categoryLabel: body.categoryLabel || "기타",
      emoji: body.emoji || "🔗",
      badge: body.badge || null,
      tags: body.tags || [],
      isHighlighted: Boolean(body.isHighlighted),
      clicks: 0,
      order: mockData.data.length + 1,
      openInNewTab: body.openInNewTab ?? true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        code: 201,
        message: "새 링크를 성공적으로 등록했어요",
        data: newLink,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        code: 500,
        message: "링크를 등록하는 중 문제가 발생했어요",
      },
      { status: 500 }
    );
  }
}
