# Kubernetes Explorer

Kubernetes Explorer lets you have an overview of the applications deployed on your Kubernetes cluster.  
It helps you create a Graphviz file showing the objects and dependencies inside your cluster.

## Creator

Jonathan Donzallaz

## Deployment

```bash
python setup.py sdist bdist_wheel
python -m twine upload dist/*
```
