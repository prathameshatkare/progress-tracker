from graphviz import Digraph

# Create a directed graph
dot = Digraph(comment="Federated Contrastive Learning")

# --- Pre-training stage ---
with dot.subgraph(name="cluster_pretrain") as c:
    c.attr(label="Pre Training Stage", color="lightblue")
    c.node("start_pre", "Start federated pre training", shape="oval")
    c.node("server", "Server", shape="rectangle")
    c.node("client", "Device client", shape="rectangle")
    c.node("encode", "Encode local data", shape="rectangle")
    c.node("upload", "Upload features and model", shape="parallelogram")
    c.node("aggregate", "Aggregate models and features", shape="rectangle")
    c.node("distribute", "Distribute aggregated model\nand remote features", shape="parallelogram")
    c.node("contrastive", "Contrastive local learning", shape="rectangle")
    c.node("update", "Update models", shape="rectangle")
    c.node("store", "Store local features", shape="rectangle")
    c.node("end_pre", "End federated pre training", shape="oval")

# --- Fine-tuning stage ---
with dot.subgraph(name="cluster_finetune") as c:
    c.attr(label="Fine Tuning Stage", color="lightgreen")
    c.node("start_ft", "Start fine tuning", shape="oval")
    c.node("pretrained", "Pre trained model", shape="rectangle")
    c.node("tuning", "Tuning method", shape="diamond")
    c.node("local_ft", "Local fine tuning", shape="rectangle")
    c.node("fed_ft", "Federated fine tuning", shape="rectangle")
    c.node("end_ft", "End fine tuning", shape="oval")

# --- Relationships ---
dot.edges([
    ("start_pre", "server"),
    ("server", "client"),
    ("client", "encode"),
    ("encode", "upload"),
    ("upload", "aggregate"),
    ("aggregate", "distribute"),
    ("client", "contrastive"),
    ("contrastive", "update"),
    ("update", "store"),
    ("store", "upload"),
    ("aggregate", "end_pre"),
    ("end_pre", "start_ft"),
    ("start_ft", "pretrained"),
    ("pretrained", "tuning"),
    ("tuning", "local_ft"),
    ("tuning", "fed_ft"),
    ("local_ft", "end_ft"),
    ("fed_ft", "end_ft")
])

# Save & render
dot.render("federated_contrastive_learning", format="png", cleanup=True)
print("Diagram saved as federated_contrastive_learning.png")
