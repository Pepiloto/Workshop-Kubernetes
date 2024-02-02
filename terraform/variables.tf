variable "envs" {
  description = "An array of values"
  type        = list(string)
  default     = ["prod", "dev", "staging"]
}