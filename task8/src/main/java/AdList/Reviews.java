package AdList;

public class Reviews {
    private String name;
    private String surname;
    private String photoLinkOfReviewer;
    private String textOfReview;
    private int evaluationOfProduct;

    public Reviews(){
        name = "";
        surname = "";
        photoLinkOfReviewer = "";
        textOfReview = "";
        evaluationOfProduct = 0;
    }

    public Reviews(String name, String surname, String photoLinkOfReviewer, String textOfReview, int evaluationOfProduct) {
        this.name = name;
        this.surname = surname;
        this.photoLinkOfReviewer = photoLinkOfReviewer;
        this.textOfReview = textOfReview;
        this.evaluationOfProduct = evaluationOfProduct;
    }
}
