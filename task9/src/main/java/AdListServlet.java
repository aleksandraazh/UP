import AdList.Ad;
import AdList.AdList;
import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/adList")
public class AdListServlet extends HttpServlet {
    private static final AdList adList = new AdList();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        if(id != null) {
            response.setContentType("application/json");
            response.getWriter().print((new Gson()).toJson(adList.getAd(id)));
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        if(id != null){
            response.setContentType("application/json");
            response.getWriter().print(new Gson().toJson(adList.getAd(id)));
        }
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        if(id != null) {
            response.setContentType("application/json");
            response.getWriter().print((new Gson()).toJson(adList.remove(id)));
        }
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        String[] url = request.getRequestURI().split("/");
        Ad ad = new Ad(url[3]);
        if(url[2].equals("addAd")){
            response.getWriter().print((new Gson()).toJson(adList.addAd(ad)));
        }
        if (url[2].equals("editAd")){
            response.getWriter().print((new Gson()).toJson(adList.editAd(request.getParameter("id"), ad)));
        }
    }
}
