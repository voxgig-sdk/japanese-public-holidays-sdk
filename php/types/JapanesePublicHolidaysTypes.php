<?php
declare(strict_types=1);

// Typed models for the JapanesePublicHolidays SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Jpn entity data model. */
class Jpn
{
    public string $date;
    public string $kind;
    public array $name;
    public ?string $weekday = null;
}

/** Request payload for Jpn#list. */
class JpnListMatch
{
    public ?string $date = null;
    public ?string $kind = null;
    public ?array $name = null;
    public ?string $weekday = null;
}

/** Year entity data model. */
class Year
{
    public string $date;
    public string $kind;
    public array $name;
    public ?string $weekday = null;
}

/** Request payload for Year#list. */
class YearListMatch
{
    public int $year;
}

