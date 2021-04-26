class AdsPage {
    constructor() {
    }

    _data
    _name
    _adList

    set data(value) {
        this._data = value;
    }

    set name(value) {
        this._name = value;
    }

    set adList(value) {
        this._adList = value;
    }

    showHeader() {
        let last = document.getElementsByTagName("header").item(0).lastElementChild;
        console.log(last);
        document.getElementsByTagName("header").item(0).replaceChild(new DOMBuilder(this._name).createHeader(), last);
    }

    showSelectVendor() {
        let vendors = document.getElementsByClassName("select-vendor").item(0);
        let adList = this._adList.getPage(0, 1);
        let skip = 1;
        while (adList.length !== 0) {
            vendors.appendChild(document.createElement("option")).append(adList[0].vendor);
            adList = this._adList.getPage(skip, 1);
            skip++;
        }
    }

    showAds() {
        let adInPage = this._adList.getPage(0, 10);
        let data = document.getElementsByClassName(this._name).item(0);
        for(let i = 0; i < adInPage.length; i++) {
            data.appendChild(new DOMBuilder(this._name, adInPage[i]).createPost());
        }
    }

    addAd(ad) {
        if(this._adList.add(ad)) {
            document.getElementsByClassName(this._data).item(0).insert(ad);
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
        let root = document.getElementsByClassName(this._data).item(0);
        let oldChild = document.getElementById(id);
        let newChild = new DOMBuilder(this._name, this._adList.get(id)).createPost();
        root.replaceChild(newChild, oldChild);
    }
}