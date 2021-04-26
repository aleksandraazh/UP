import AdList.*;
import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(value = "/adList/search")
public class PageServlet extends HttpServlet {
    private static final AdList adList = new AdList();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Ad filterConfig = new Ad(request.getParameter("filterConfig"));
        int skip = Integer.parseInt(request.getParameter("skip"));
        int top = Integer.parseInt(request.getParameter("top"));
        String str = new Gson().toJson(adList.getPage(skip, top, filterConfig));
        response.setContentType("application/json");
        response.getWriter().print(str);
    }

}
