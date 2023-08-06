# xtlib: Experiment Tools Library
xtlib is an API and command line tool for running and managing ML experiments.  

XTlib is an API and command line tool for running and managing ML experiments.  

Features:
    - Experiment Store (local machine, server, Azure Storage)
        - centralized storage of experiment logs, source files, results, and models
        - management of workspaces (add ws, add collaborators, delete ws, enumerate)
        - management of experiments (add, annotate, delete, copy, extract, enumerate)
        - management of workspace and experiment files (upload, download, enumerate)

    - Experiment Run (local machine, server, Azure VM, Azure Batch)
        - start new experiment on specified machine(s)
        - stop run
        - check / monitor status of run
        - annotate run (comments)
        - log events
        - hyperparameter tuning runs

The goal of XTLib is to enable you to effortlessly organize and scale your ML experiments.
Our tools offer an incremental approach to adoption, so you can begin realizing benifits immediatly.

XTLib provides an experiment STORE that enables you to easily track, compare, rerun, and share your ML experiments.  
The STORE consists of user-defined workspaces, each of which can contain a set of user-run experiments.  
XT currently supports 2 STORE services: local (folder-based) and azure (Azure Storage-based).

In addition, XTLb also provides simple access to scalable COMPUTE resources so you can 
easily run multiple experiments in parallel and on larger computers, as needed.  With this feature, 
you can run your experiments on your local machine, other local computers or provised VMs to which you 
have aceess, or on 1 or more cloud computers, allocated on demand (Azure Batch).

Finally, XTLib offers a few other experiment-related features to help maximize your ML agility:
    - hyperparameter searching
    - ML code generation for various datasets and models 

For more information, run: xt --help

