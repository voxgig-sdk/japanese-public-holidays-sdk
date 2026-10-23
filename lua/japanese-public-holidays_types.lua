-- Typed models for the JapanesePublicHolidays SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Jpn
---@field date string
---@field kind string
---@field name table
---@field weekday? string

---@class JpnListMatch
---@field date? string
---@field kind? string
---@field name? table
---@field weekday? string

---@class Year
---@field date string
---@field kind string
---@field name table
---@field weekday? string

---@class YearListMatch
---@field year number

local M = {}

return M
