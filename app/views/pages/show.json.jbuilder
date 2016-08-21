json.array! @places.each do |place|
  json.lat place[:lat]
  json.lng place[:lng]
  json.contentString place[:contentString]
end