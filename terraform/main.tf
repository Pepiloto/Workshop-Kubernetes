provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "kind-kind"
}

resource "kubernetes_namespace" "env" {
  count = length(var.envs)
  metadata {
    name = "app-${var.envs[count.index]}"
  }
}

resource "kubernetes_deployment" "deployment" {
    count = length(var.envs)
  metadata {
    name = "myapp-${var.envs[count.index]}"
    namespace = "app-${var.envs[count.index]}"
  }
  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "myapp-${var.envs[count.index]}"
      }
    }
    template {
      metadata {
        labels = {
          app = "myapp-${var.envs[count.index]}"
        }
      }
      spec {
        container {
          image = "app:latest"
          image_pull_policy = "IfNotPresent"
          name  = "myapp-${var.envs[count.index]}"
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
