# JapanesePublicHolidays SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

JapanesePublicHolidaysUtility.registrar = ->(u) {
  u.clean = JapanesePublicHolidaysUtilities::Clean
  u.clean_add = JapanesePublicHolidaysUtilities::CleanAdd
  u.clean_explain = JapanesePublicHolidaysUtilities::CleanExplain
  u.done = JapanesePublicHolidaysUtilities::Done
  u.make_error = JapanesePublicHolidaysUtilities::MakeError
  u.feature_add = JapanesePublicHolidaysUtilities::FeatureAdd
  u.feature_hook = JapanesePublicHolidaysUtilities::FeatureHook
  u.feature_init = JapanesePublicHolidaysUtilities::FeatureInit
  u.fetcher = JapanesePublicHolidaysUtilities::Fetcher
  u.make_fetch_def = JapanesePublicHolidaysUtilities::MakeFetchDef
  u.make_context = JapanesePublicHolidaysUtilities::MakeContext
  u.make_options = JapanesePublicHolidaysUtilities::MakeOptions
  u.make_request = JapanesePublicHolidaysUtilities::MakeRequest
  u.make_response = JapanesePublicHolidaysUtilities::MakeResponse
  u.make_result = JapanesePublicHolidaysUtilities::MakeResult
  u.make_point = JapanesePublicHolidaysUtilities::MakePoint
  u.make_spec = JapanesePublicHolidaysUtilities::MakeSpec
  u.make_url = JapanesePublicHolidaysUtilities::MakeUrl
  u.param = JapanesePublicHolidaysUtilities::Param
  u.prepare_auth = JapanesePublicHolidaysUtilities::PrepareAuth
  u.prepare_body = JapanesePublicHolidaysUtilities::PrepareBody
  u.prepare_headers = JapanesePublicHolidaysUtilities::PrepareHeaders
  u.prepare_method = JapanesePublicHolidaysUtilities::PrepareMethod
  u.prepare_params = JapanesePublicHolidaysUtilities::PrepareParams
  u.prepare_path = JapanesePublicHolidaysUtilities::PreparePath
  u.prepare_query = JapanesePublicHolidaysUtilities::PrepareQuery
  u.graphql_body = JapanesePublicHolidaysUtilities::GraphqlBody
  u.graphql_errors = JapanesePublicHolidaysUtilities::GraphqlErrors
  u.result_basic = JapanesePublicHolidaysUtilities::ResultBasic
  u.result_body = JapanesePublicHolidaysUtilities::ResultBody
  u.result_headers = JapanesePublicHolidaysUtilities::ResultHeaders
  u.transform_request = JapanesePublicHolidaysUtilities::TransformRequest
  u.transform_response = JapanesePublicHolidaysUtilities::TransformResponse
}
