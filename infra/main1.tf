resource "aws_iam_role" "list_ec2" {
  name        = "list_inst_lambda_role"
  description = "Allows Lambda functions to call AWS services on your behalf."
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_policy" "list_ec2" {
  name        = "list_inst_lambda_policy"
  description = "policy which gives access to read instances information across all regions"
  policy = jsonencode(({
    Statement = [
      {
        Action = [
          "ec2:DescribeRegions",
          "ec2:DescribeInstances",
          "ec2:DescribeTags",
        ]
        Effect = "Allow"
        Resource = [
          "*"
        ]
        Sid = "Statement1"
      }
    ]
    Version = "2012-10-17"
  }))
}

resource "aws_iam_role_policy_attachment" "list_ec2" {
  role       = aws_iam_role.list_ec2.name
  policy_arn = aws_iam_policy.list_ec2.arn
}

data "archive_file" "list_ec2" {
  type        = "zip"
  source_file = "../lambdas/inst.py"
  output_path = "../lambdas/inst.zip"
}

resource "aws_lambda_function" "list_ec2" {
  function_name    = "list_inst_lambda"
  filename         = data.archive_file.list_ec2.output_path
  source_code_hash = data.archive_file.list_ec2.output_base64sha256
  handler          = "inst.lambda_handler"
  runtime          = "python3.14"
  role             = aws_iam_role.list_ec2.arn
  architectures = [
    "x86_64"
  ]
  timeout = 60
  tags = {
    CreatedBy = "Rushi"
  }
}

