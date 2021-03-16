package com.example.task5;

import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(value = "/check")
public class check extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("json");
        PrintWriter pw = response.getWriter();
        pw.println("{\"success\": true }");
    }
}
