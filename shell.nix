{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22
    pagefind
  ];

  shellHook = ''
    echo "Node.js development environment ready!"
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
  '';
}
