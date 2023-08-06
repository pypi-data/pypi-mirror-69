![](https://github.com/navikt/dataverk-vault/workflows/Unittests/badge.svg)
![](https://github.com/navikt/dataverk-vault/workflows/Release/badge.svg)

# Dataverk vault

Bibliotek med api mot vault for secrets handling og database credential generering for dataverk

### Installasjon

#### Master branch versjon
```
git clone https://github.com/navikt/dataverk-vault.git
cd dataverk-vault
pip install .
```

#### Siste release
```
pip install dataverk-vault
```

## Environment variabler
Følgende environment variabler må være satt i miljøet biblioteket brukes:
- APPLICATION_NAME: Applikasjonsnavn i vault
- K8S_SERVICEACCOUNT_PATH: Serviceaccount sti i containermiljø
- VKS_VAULT_ADDR: Vault adresse
- VKS_AUTH_PATH: Autentisering URI
- VKS_KV_PATH: Secrets URI

## For NAV-ansatte
Interne henvendelser kan sendes via Slack i kanalen #dataverk