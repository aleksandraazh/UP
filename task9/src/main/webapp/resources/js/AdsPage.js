class AdsPage {
    constructor() {
    }

    _root
    _name
    _adList

    set root(value) {
        this._root = value;
    }

    set name(value) {
        this._name = value;
    }

    set adList(value) {
        this._adList = value;
    }

    showHeader() {
        let last = document.getElementsByTagName("header").item(0).lastElementChild;
        document.getElementsByTagName("header").item(0).replaceChild(new DOMBuilder(this._name).createHeader(), last);
    }

    showSelectVendor() {
        let vendors = document.getElementsByClassName("select-vendor").item(0);
        let vendorsList = this._adList.getAllVendors();
        for (let i = 0; i < vendors.length; i++) {
            vendors.appendChild(document.createElement("option")).append(vendorsList[i]);
        }
    }

    showAds(skip, top) {
        let adInPage = this._adList.getPage(skip, top);
        let root = document.getElementsByClassName(this._name).item(0);
        for(let i = 0; i < adInPage.length; i++) {
            root.appendChild(new DOMBuilder(this._name, adInPage[i]).createPost());
        }
    }

    addAd(ad) {
        if(this._adList.add(ad)) {
            document.getElementsByClassName(this._root).item(0).insert(ad);
        }
    }

    deleteAd(id) {
        if(this._adList.remove(id)) {
            document.getElementById(id).remove();
            return true;
        }
        else {
            return false;
        }
    }

    editAd(id, adItem) {
        this._adList.edit(id, adItem);
        let root = document.getElementsByClassName(this._root).item(0);
        let oldChild = document.getElementById(id);
        let newChild = new DOMBuilder(this._name, this._adList.get(id)).createPost();
        root.replaceChild(newChild, oldChild);
    }
}