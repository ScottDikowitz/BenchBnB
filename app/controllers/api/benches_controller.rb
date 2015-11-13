class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render json: @benches.to_json
  end

end
