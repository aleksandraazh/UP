package com.example.task5;

import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "check", value = "/check")
public class check extends HttpServlet {
    private String message;

    public void init() {
        message = "true";
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("json");
        PrintWriter pw = response.getWriter();
        pw.println("{\"success\" :" + request.getParameter(message) + " }");
    }

    public void destroy() {
    }
}
