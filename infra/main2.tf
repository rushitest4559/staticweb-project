resource "aws_api_gateway_rest_api" "list_resources" {
  name = "list_resources_api"
}

resource "aws_api_gateway_resource" "list_resources" {
  rest_api_id = aws_api_gateway_rest_api.list_resources.id
  parent_id   = aws_api_gateway_rest_api.list_resources.root_resource_id
  path_part   = "list_inst"
}

resource "aws_api_gateway_method" "list_resources" {
  http_method   = "GET"
  resource_id   = aws_api_gateway_resource.list_resources.id
  authorization = "NONE"
  rest_api_id   = aws_api_gateway_rest_api.list_resources.id
}

resource "aws_api_gateway_integration" "list_resources" {
  rest_api_id             = aws_api_gateway_rest_api.list_resources.id
  resource_id             = aws_api_gateway_resource.list_resources.id
  type                    = "AWS"
  http_method             = "GET"
  integration_http_method = "POST"
  content_handling        = "CONVERT_TO_TEXT"
  uri                     = aws_lambda_function.list_ec2.invoke_arn
}