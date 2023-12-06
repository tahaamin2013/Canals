import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const getAllServices = await prisma.content.findMany(); // Use Prisma model name 'services'

    if (getAllServices && getAllServices.length) {
      return NextResponse.json({
        success: true,
        data: getAllServices,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch content. Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
