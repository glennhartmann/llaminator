{
  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs;
    flake-compat.url = "https://flakehub.com/f/edolstra/flake-compat/1.tar.gz";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-compat, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        llaminator = pkgs.buildNpmPackage {
          pname = "llaminator";
          version = "0.0.1";
          src = builtins.path { path = ./.; name = "llaminator"; };
          npmDepsHash = "sha256-eCAI4SnCC0NwdoWdYpAOhM7QduplkTnqPuUKxlzT+DE=";

          # The prepack script runs the build script, which we'd rather do in the build phase.
          npmPackFlags = [ "--ignore-scripts" ];

          PUPPETEER_SKIP_DOWNLOAD="1";

          installPhase = ''
            runHook preInstall

            mkdir -p $out
            cp -r dist $out

            runHook postInstall
          '';
        };
      in
      {
        packages = {
          inherit llaminator;
          default = llaminator;
        };
      }
    );
}
