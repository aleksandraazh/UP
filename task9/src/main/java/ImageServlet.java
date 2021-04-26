import org.json.JSONException;
import org.json.JSONWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Collection;

@MultipartConfig
@WebServlet(value = "/image")
public class ImageServlet extends HttpServlet {

     @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("application/json");
        Collection<Part> parts = request.getParts();
        for (Part part : parts){
            File file = new File(part.getSubmittedFileName());
            try(FileOutputStream fos = new FileOutputStream(file)) {
                fos.write(part.getInputStream().readAllBytes());
                new JSONWriter(response.getWriter()).object().key("filename").value(file.getPath()).endObject();
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}