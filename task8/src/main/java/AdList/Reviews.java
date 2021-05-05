package adlist;

public class Reviews {
    private final String name;
    private final String surname;
    private final String photoLinkOfReviewer;
    private final String textOfReview;
    private final int evaluationOfProduct;

    public Reviews() {
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
