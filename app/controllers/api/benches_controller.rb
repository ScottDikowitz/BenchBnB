class Api::BenchesController < ApplicationController
  def index

      bounds = {
      "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
      "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
      }
    @benches = Bench.in_bounds(bounds)
    render json: @benches.to_json
  end

end
