package com.example.task5;

import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(value = "/get")
public class get extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter pw = response.getWriter();
        String parameter = request.getParameter("name");
        if(parameter.length() > 100){
            throw new IOException();
        }
        pw.println("<big>The name is " + parameter + "</big>");
    }
}
