install:
	go install -ldflags "-X github.com/incubus-network/futool/config/generate.ConfigTemplatesDir=$(CURDIR)/config/templates"

generate-fury-genesis:
	bash ./config/generate/genesis/generate-fury-genesis.sh

# when keys are added or changed, use me. we don'd replace keys by default because they include
# creation time, so they create noise by always creating a diff.
generate-fury-genesis-with-keys:
	REPLACE_ACCOUNT_KEYS=true bash ./config/generate/genesis/generate-fury-genesis.sh

generate-ibc-genesis:
	CHAIN_ID=furylocalnet_8889-2 DEST=./config/templates/ibcchain/master/initstate/.fury DENOM=uatom SKIP_INCENTIVES=true bash ./config/generate/genesis/generate-fury-genesis.sh
