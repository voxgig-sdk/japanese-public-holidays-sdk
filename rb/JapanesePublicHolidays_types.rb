# frozen_string_literal: true

# Typed models for the JapanesePublicHolidays SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Jpn entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] name
#   @return [Hash]
#
# @!attribute [rw] weekday
#   @return [String, nil]
Jpn = Struct.new(
  :date,
  :kind,
  :name,
  :weekday,
  keyword_init: true
)

# Request payload for Jpn#list.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [Hash, nil]
#
# @!attribute [rw] weekday
#   @return [String, nil]
JpnListMatch = Struct.new(
  :date,
  :kind,
  :name,
  :weekday,
  keyword_init: true
)

# Year entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] name
#   @return [Hash]
#
# @!attribute [rw] weekday
#   @return [String, nil]
Year = Struct.new(
  :date,
  :kind,
  :name,
  :weekday,
  keyword_init: true
)

# Request payload for Year#list.
#
# @!attribute [rw] year
#   @return [Integer]
YearListMatch = Struct.new(
  :year,
  keyword_init: true
)

