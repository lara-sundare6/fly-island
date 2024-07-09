#!/bin/bash
echo "Testing Terraform configuration..."
cd terraform/tests || exit
go test -v
echo "Terraform tests completed successfully."
