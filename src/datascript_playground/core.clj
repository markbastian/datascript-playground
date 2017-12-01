(ns datascript-playground.core)

;We'll use this later
(def sample-data
  [{:name "Mark", :age 21, :time #inst"2017-01-01T00:00:00.000-00:00", :price 3.4}
   {:name "Becky", :age 17, :time #inst"2015-01-01T00:00:00.000-00:00", :price 0.1}
   {:name "Chloe", :age 9, :time #inst"2010-01-01T00:00:00.000-00:00", :price 9.0}
   {:name "Mike", :age 34, :time #inst"1990-01-01T00:00:00.000-00:00", :price 3.6}
   {:name "Matt", :age 78, :time #inst"1984-01-01T00:00:00.000-00:00", :price 8.0}])