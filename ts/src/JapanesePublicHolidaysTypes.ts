// Typed models for the JapanesePublicHolidays SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Jpn {
  date: string
  kind: string
  name: Record<string, any>
  weekday?: string
}

export interface JpnListMatch {
  date?: string
  kind?: string
  name?: Record<string, any>
  weekday?: string
}

export interface Year {
  date: string
  kind: string
  name: Record<string, any>
  weekday?: string
}

export interface YearListMatch {
  year: number
}

