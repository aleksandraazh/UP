SELECT Name, CreatedAt, length(Description) FROM Vendor JOIN Ads ON Id = Vendor.Id
WHERE length(Description) > 30