
variable "aws_region" {
  default = "us-east-1"
  description = "The AWS region name"
}

variable "runtime" {
  default = "python3.8"
  description = "The runtime used to execute the lambda function"
}

variable "function_name" {
  description = "The name of the lambda function"
}

variable "function_handler" {
  description = "The name of the lambda function"
}

variable "function_archive" {
  description = "The archive/zip used to package the function"
}


provider "aws" {
  region = var.aws_region
}

# AWS lambda function definition.
resource "aws_lambda_function" "example" {
  filename         = var.function_archive
  function_name    = var.function_name
  handler          = var.function_handler
  runtime          = var.runtime
  role             = aws_iam_role.lambda_exec.arn
}

# IAM role to determine the services the lambda can access.
resource "aws_iam_role" "lambda_exec" {
  name = "serverless_example_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF

}