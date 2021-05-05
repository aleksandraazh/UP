package adlist;

import java.util.ArrayList;
import java.util.List;

public class AdList {
    private final List<Ad> adList;

    public AdList() {
        adList = new ArrayList<>();
    }

    public AdList(List<Ad> adList) {
        this.adList = adList;
    }

    public Ad getAd(String id) {
        return adList.stream().filter(ad -> ad.getId().equals(id)).findFirst().orElse(null);
    }

    public boolean editAd(String id, Ad adItem) {
        boolean flag = false;
        for (Ad item: adList) {
            if (item.getId().equals(id)) {
                if (adItem.getDescription() != null) {
                    item.setDescription(adItem.getDescription());
                    flag = true;
                }
                if (adItem.getLink() != null) {
                    item.setLink(adItem.getLink());
                    flag = true;
                }
                if (adItem.getDiscount() != -1) {
                    item.setDiscount(adItem.getDiscount());
                    flag = true;
                }
                if (adItem.getHashTags() != null) {
                    item.setHashTags(adItem.getHashTags());
                    flag = true;
                }
                if (adItem.getValidUntil() != null) {
                    item.setValidUntil(adItem.getValidUntil());
                    flag = true;
                }
            }
        }
        return flag;
    }

    public boolean addAd(Ad ad) {
        if (isValid(ad)) {
            adList.add(ad);
            return true;
        }
        else {
            return false;
        }
    }

    public List<Ad> getPage(int skip, int top, Ad filterConfig) {
        List<Ad> result = new ArrayList<>();
        if (filterConfig != null) {
            for (Ad ad : adList) {
                if (filterConfig.getVendor() != null && filterConfig.getVendor().equals(ad.getVendor())) {
                    result.add(ad);
                }
                if (filterConfig.getCreatedAt() != null && filterConfig.getCreatedAt().equals(ad.getCreatedAt())) {
                    result.add(ad);
                }
                if (filterConfig.getValidUntil() != null && filterConfig.getValidUntil().equals(ad.getValidUntil())) {
                    result.add(ad);
                }
                if (filterConfig.getHashTags() != null && filterConfig.getHashTags().equals(ad.getHashTags())) {
                    result.add(ad);
                }
            }
        }
        return result.subList(skip, Math.min(top + skip, adList.size()));
    }

    public List<Ad> getPage(int skip, int top) {
        return getPage(skip, top,null);
    }

    public List<Ad> addAll(List<Ad> newList) {
        List<Ad> validAds = new ArrayList<>();
        for (Ad item: newList) {
            if (isValid(item)) {
                adList.add(item);
                validAds.add(item);
            }
        }
        return validAds;
    }

    public boolean remove(String id) {
        return adList.removeIf(ad -> ad.getId().equals(id));
    }

    public List<Ad> getAllAdList() {
        return adList;
    }

    public void clear() {
        adList.clear();
    }

    public boolean isValid(Ad ad) {
        return ad != null && ad.getId() != null && ad.getCreatedAt() != null && ad.getDiscount() >= 0
                && ad.getDiscount() <= 100 && ad.getRating() >= 0 && ad.getRating() <= 5
                && ad.getDescription() != null && ad.getDescription().length() < 200 && ad.getHashTags() != null
                && ad.getLink() != null && ad.getValidUntil() != null && ad.getVendor() != null;
    }
}
