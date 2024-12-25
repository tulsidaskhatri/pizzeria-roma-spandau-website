# Create SSL Certificate
resource "aws_acm_certificate" "ssl_certificate" {
  provider          = aws.us_east_1
  domain_name       = var.domain_name
  validation_method = "DNS"

  # Optional: Add additional domains or subdomains if needed
  subject_alternative_names = [
    "www.${var.domain_name}"
  ]

  lifecycle {
    create_before_destroy = true
  }
}

# DNS Validation Records (Route 53 Example)
resource "aws_route53_record" "certificate_validation" {
  for_each = {
    for dvo in aws_acm_certificate.ssl_certificate.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  }

  zone_id = aws_route53_zone.primary.zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.value]
  ttl     = 60
}

# Route 53 Hosted Zone (Required for DNS Validation)
resource "aws_route53_zone" "primary" {
  name = var.domain_name
}

