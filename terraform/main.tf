provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "kind-kind"
}

resource "kubernetes_namespace" "namespace" {
  metadata {
    name = "app"
  }
}

resource "kubernetes_deployment" "deployment" {
  metadata {
    name = "myapp"
    namespace = "app"
  }
  spec {
    replicas = 3
    selector {
      match_labels = {
        app = "myapp"
      }
    }
    template {
      metadata {
        labels = {
          app = "myapp"
        }
      }
      spec {
        container {
          image = "app:latest"
          image_pull_policy = "IfNotPresent"
          name  = "myapp"
          resources {
            limits = {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "50Mi"
            }
          }
        }
      }
    }
  }
}
