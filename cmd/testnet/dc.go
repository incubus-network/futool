package testnet

import (
	"fmt"
	"strings"

	"github.com/spf13/cobra"
)

func DcCmd() *cobra.Command {
	dcCmd := &cobra.Command{
		Use:   "dc",
		Short: "A convenience command that runs `docker-compose <...args>` on the generated config.",
		Example: `Follow logs of running chain ("--" necessary to correctly interpret docker-compose flags):
$ futool testnet dc -- logs -f

Get a shell in the fury node container:
$ futool testnet dc exec furynode /bin/bash

Run some fury cli commands:
$ futool testnet dc exec furynode fury keys add magic-account
$ futool testnet dc exec furynode -- fury tx bank send whale <address> 1000000000ufury --gas-prices 1000ufury -y`,
		Args: cobra.ArbitraryArgs,
		RunE: func(_ *cobra.Command, args []string) error {
			cmd := []string{"docker-compose", "--file", generatedPath("docker-compose.yaml")}
			cmd = append(cmd, args...)
			fmt.Println("running:", strings.Join(cmd, " "))
			if err := replaceCurrentProcess(cmd...); err != nil {
				return fmt.Errorf("could not run command: %v", err)
			}
			return nil
		},
	}

	return dcCmd
}
