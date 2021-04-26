class DOMBuilder {
    _nameUser
    _ad

    constructor(nameUser, ad = null) {
        this._nameUser = nameUser;
        this._ad = ad;
    }

    createHeader() {
        let menu = document.createElement("ul");
        menu.className = "header-right";
        menu.appendChild(document.createElement("li"));
        menu.lastElementChild.appendChild(document.createElement("button")).className = "log-out-button";
        menu.lastElementChild.lastElementChild.textContent = this._nameUser + " | EXIT";
        menu.appendChild(document.createElement("li"));
        menu.lastElementChild.appendChild(document.createElement("button")).className = "add-button";
        menu.lastElementChild.lastElementChild.textContent = "ADD AN ADVERT";
        return menu;
    }

    createPost() {
        let post = document.createElement("article");
        post.className = "offer";
        post.id = this._ad.id;
        post.appendChild(document.createElement("br"));
        post.appendChild(document.createElement("h3")).textContent = this._ad.vendor;
        post.appendChild(document.createElement("br"));
        post.appendChild(document.createElement("img")).src = this._ad.photoLink;
        post.appendChild(document.createElement("h3")).textContent = "Short description:";
        post.appendChild(document.createElement("p")).className = "description-of-offer";
        post.lastElementChild.textContent = this._ad.description;
        post.appendChild(document.createElement("a")).href = this._ad.link;
        post.lastElementChild.textContent = "Vendor link...";
        post.appendChild(this._tags());
        post.appendChild(document.createElement("p")).textContent = "Offer created at " + this._ad.createdAt;
        post.appendChild(document.createElement("p")).textContent = "Offer valid until " + this._ad.validUntil;
        post.appendChild(document.createElement("p")).textContent = this._ad.discount;
        post.appendChild(this._rating());
        post.appendChild(document.createElement("h3")).textContent = this._ad.reviews.length + " reviews:";
        post.appendChild(this._comments());
        post.appendChild(document.createElement("from"));
        post.lastElementChild.appendChild(document.createElement("label"));
        let addComment = document.createElement("textarea");
        addComment.placeholder = "Write your review...";
        addComment.name = "message";
        addComment.rows = 3;
        addComment.cols = 45;
        post.lastElementChild.lastElementChild.appendChild((addComment));
        return post;
    }

    _tags() {
        let tags = document.createElement("div");
        for (let i = 0; i < this._ad.hashTags.length; i++) {
            tags.appendChild(document.createElement("p")).textContent = this._ad.hashTags[i];
        }
        return tags;
    }

    _rating() {
        let ratingStars = document.createElement("div");
        ratingStars.className = "rating";
        for (let i = 0; i < 5; i++) {
            let input = ratingStars.appendChild(document.createElement("input"));
            input.type = "radio";
            input.id = "post-" + this._ad.id + "-star-" + (5 - i);
            input.disabled = true;
            if (this._ad.rating !== undefined && 5 - i === this._ad.rating) {
                input.checked = true;
            }
            ratingStars.appendChild(document.createElement("label")).htmlFor = input.id;
        }
        return ratingStars;
    }

    _comments() {
        let comments = document;
        for (let i = 0; i < this._ad.reviews.length; i++){
            comments.appendChild(document.createElement("br"));
            let comment = document.createElement("div");
            comment.className = "container-for-reviews";
            comment.appendChild(document.createElement("img")).src = this._ad.reviews[i].photoLinkOfReviewer;
            comment.appendChild(document.createElement("p"));
            comment.lastElementChild.appendChild(document.createElement("span")).textContent = this._ad.reviews[i].name;
            comment.appendChild(document.createElement("p")).textContent = this._ad.reviews[i].textOfReview;
            comments.appendChild(comment);
        }
        return comments;
    }
}