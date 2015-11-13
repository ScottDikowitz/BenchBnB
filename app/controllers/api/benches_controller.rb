class Api::BenchesController < ApplicationController
  def index

    @benches = Bench.in_bounds(params[:bounds]) unless params[:bounds].nil?
    render json: @benches.to_json
  end

end
