import { NextRequest, NextResponse } from "next/server";
import mockData from "@/mock/links.json";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const link = mockData.data.find((item) => item.id === id);

  if (!link) {
    return NextResponse.json(
      {
        success: false,
        code: 404,
        message: "요청하신 링크를 찾을 수 없어요",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    code: 200,
    message: "링크 상세 정보를 조회했어요",
    data: link,
  });
}

export async function PATCH(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const link = mockData.data.find((item) => item.id === id);

  if (!link) {
    return NextResponse.json(
      {
        success: false,
        code: 404,
        message: "요청하신 링크를 찾을 수 없어요",
      },
      { status: 404 }
    );
  }

  // Mock click increment
  const updatedLink = {
    ...link,
    clicks: link.clicks + 1,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json({
    success: true,
    code: 200,
    message: "클릭 수가 정상적으로 반영되었어요",
    data: updatedLink,
  });
}
