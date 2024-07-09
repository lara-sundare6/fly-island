#!/bin/bash
echo "Building Rust project..."
cd rust_project || exit
cargo build --release
echo "Rust project built successfully."
