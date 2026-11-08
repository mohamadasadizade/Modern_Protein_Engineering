# Computational Protein Modelling & Design — Course Website

An English-language academic course website covering:
1. Foundations: computational protein modelling/design, structure-to-sequence and sequence-to-structure, deep learning, transformers and diffusion models.
2. AlphaFold: architecture, structure prediction, mutation modelling and result interpretation.
3. RFdiffusion: binding sites, diffusion-based design, Docker setup, conditional binder design, ProteinMPNN and validation.

## Preview locally
Open `index.html` in a web browser. No Python environment or package installation is required.

## Publish with GitHub Pages
1. Create a **public** GitHub repository (GitHub Free supports Pages for public repositories).
2. Upload the contents of this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for deployment and open the URL shown in Settings → Pages.

The site is plain HTML/CSS/JavaScript, so no build step is required.

## Before publishing
- Add the exact AlphaFold version and the Colab/server URL used in the class.
- Verify all RFdiffusion commands against the exact Docker image and version tested by the instructor.
- Add the final 4ZXB chain, crop and hotspot residue mapping.
- Add screenshots, example structures and actual outputs after the workflow has been tested.
- Add full bibliographic references for the papers discussed in class.

## Important
The current content is an initial course structure and explanatory draft, not a complete protocol. Do not present placeholder links or unverified commands as tested instructions.
