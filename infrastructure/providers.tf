terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.2.0"
    }
  }
}
provider "aws" {
  region = var.region
}


provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
