class PagesController < ApplicationController
  def index
  end

  def show
    @places = [{lat: -25.446271, lng: 130.839508, contentString: "<p> One </p>"}, 
    {lat: -24.463579, lng: 132.693679, contentString: "<p> Two </p>"}, 
    {lat: -25.001287, lng: 131.134061, contentString: "<p> Three </p>"}, 
    {lat: -33.896135, lng: 151.121449, contentString: "<p> Four </p>"}, 
    {lat: -33.631740, lng: 150.944227, contentString: "<p> Five </p>"}]
    p @places
    render 'show.json.jbuilder'
  end
end
