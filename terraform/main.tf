provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "kind-kind"
}

resource "kubernetes_namespace" "example" {
  metadata {
    name = "app"
  }
}

