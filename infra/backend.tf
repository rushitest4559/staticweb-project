terraform {
  backend "s3" {
    bucket         = "terraform-state-files-for-all-projects"
    key            = "staticweb-project/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-lock-table"
    encrypt        = true
  }
}
