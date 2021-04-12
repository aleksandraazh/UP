package AdList;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Ad {
    private String id;
    private String description;
    private Date createdAt;
    private String link;
    private String vendor;
    private String photoLink;
    private Date validUntil;
    private int discount;
    private List<String> hashTags;
    private int rating;
    private List<Reviews> reviews;

    public Ad() {
        id = "";
        description = "";
        createdAt = new Date();
        link = "";
        vendor = "";
        photoLink = "";
        hashTags = new ArrayList<>();
        discount = -1;
        validUntil = new Date();
        rating = 0;
        reviews = new ArrayList<>();
    }

    public Ad(Ad ad) {
        this.id = ad.id;
        this.description = ad.description;
        this.createdAt = ad.createdAt;
        this.link = ad.link;
        this.vendor = ad.vendor;
        this.photoLink = ad.photoLink;
        this.validUntil = ad.validUntil;
        this.discount = ad.discount;
        this.hashTags = ad.hashTags;
        this.rating = ad.rating;
        this.reviews = ad.reviews;
    }

    public Ad(String json){
        this(new Gson().fromJson(json, Ad.class));
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public Date getValidUntil() {
        return validUntil;
    }

    public void setValidUntil(Date validUntil) {
        this.validUntil = validUntil;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public List<Reviews> getReviews() {
        return reviews;
    }

    public void setReviews(List<Reviews> reviews) {
        this.reviews = reviews;
    }
}
