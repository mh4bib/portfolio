import pool from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    const body = await req.json();
    const {
      name,
      studentId,
      design,
      navigation,
      content,
      accessibility,
      performance,
    } = body;

    // console.log({ name, studentId });

    try {
      const client = await pool.connect();
      const query = `
      INSERT INTO feedback (
        name, 
        student_id, 
        design, 
        navigation, 
        content, 
        accessibility, 
        performance
      ) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
      const values = [
        name,
        studentId,
        design,
        navigation,
        content,
        accessibility,
        performance,
      ];
      await client.query(query, values);
      client.release();

      return NextResponse.json(
        { message: "Feedback submitted successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error saving feedback:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
      // res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const client = await pool.connect();
    const query = `
      SELECT 
        AVG(design) as design, 
        AVG(navigation) as navigation, 
        AVG(content) as content, 
        AVG(accessibility) as accessibility, 
        AVG(performance) as performance,
        COUNT(*) as feedback_count
      FROM feedback
    `;
    const result = await client.query(query);
    client.release();

    const averages = result.rows[0];

    return NextResponse.json(averages, { status: 200 });
  } catch (error) {
    console.error("Error fetching average ratings:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
