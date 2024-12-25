locals {
  s3_origin_id   = "www.${var.bucket_name}-origin"
  s3_domain_name = "www.${var.bucket_name}.s3-website.${var.region}.amazonaws.com"
}

resource "aws_cloudfront_distribution" "this" {
  depends_on = [aws_acm_certificate.ssl_certificate]

  enabled = true

  origin {
    origin_id   = local.s3_origin_id
    domain_name = local.s3_domain_name
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1"]
    }
  }

  default_cache_behavior {

    target_origin_id = local.s3_origin_id
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # SSL/TLS Certificate
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.ssl_certificate.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  aliases = ["pizzeriaroma-spandau.de"]

  price_class = "PriceClass_100"

}
