SELECT Id, Name FROM Vendor JOIN Ads ON Vendor.Id = Ads.VendorId
WHERE ValidUntil > curdate() GROUP BY Name HAVING count > 5