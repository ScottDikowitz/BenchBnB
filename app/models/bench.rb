class Bench < ActiveRecord::Base
  validates :description, :lng, :lng, presence: true


  def self.in_bounds(bounds)

    in_bound_benches = Bench.find_by_sql([<<-SQL, bounds["southWest"]["lat"], bounds["southWest"]["lng"], bounds["northEast"]["lng"], bounds["northEast"]["lat"]])

      SELECT
        benches.*
      FROM
        benches
      WHERE
        (lat >= ? AND lng >= ?)
        AND (lng <= ? AND lat <= ?)
    SQL

    return in_bound_benches
  end

end
