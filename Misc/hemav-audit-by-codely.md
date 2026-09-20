<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Auditoría Hemav](#auditor%C3%ADa-hemav)
  - [Diseño de código](#dise%C3%B1o-de-c%C3%B3digo)
  - [Arquitectura de software](#arquitectura-de-software)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Auditoría Hemav

- <https://pro.codely.com/library/auditoria-hemav-231549>
- ETA: ~ 3 horas
- [Diseño de infraestructura: AWS SQS como cola de mensajería](https://pro.codely.com/library/diseno-de-infraestructura-aws-sqs-como-cola-de-mensajeria-220542/584828/about/)
- [Hemav](https://hemav.com/en/)
  - Satélites, análisis de terrenos, etc.
  - Teams structure: frontend, data, backend. WTF :-(

## Diseño de código

- [PDF with Code Design insights](./hemav-audity-by-codely/Hemav_Audit_Code_Design.pdf)
- "Layers" es el producto principal de Hemav.
- We create the DTO to pass to the Use Case directly from the JSon request payload: highly-coupled.
  - Codely prefers passing the arguments individually to the Use Cases...
- Gestión de errores: lack of middleware.

## Arquitectura de software

- TBD

Bookmark: 
