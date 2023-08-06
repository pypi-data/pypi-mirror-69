use serde_json;

use std::fs::File;
use std::io::BufReader;
use std::path::PathBuf;

use sourmash::cmd::ComputeParameters;
use sourmash::signature::Signature;
use sourmash::signature::SigsTrait;

#[test]
fn load_signature() {
    let mut filename = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    filename.push("../../tests/test-data/genome-s10+s11.sig");

    let file = File::open(filename).unwrap();
    let reader = BufReader::new(file);
    let sigs: Vec<Signature> = serde_json::from_reader(reader).expect("Loading error");

    assert_eq!(sigs.len(), 1);

    let sig = sigs.get(0).unwrap();
    assert_eq!(sig.class(), "sourmash_signature");
    assert_eq!(sig.email(), "");
    assert_eq!(sig.filename(), "-");
    assert_eq!(sig.hash_function(), "0.murmur64");
    assert_eq!(sig.name(), "s10+s11");
    assert_eq!(sig.size(), 4);
}

#[test]
fn signature_from_computeparams() {
    let params = ComputeParameters {
        ksizes: vec![2, 3, 4],
        num_hashes: 3,
        ..Default::default()
    };

    let mut sig = Signature::from_params(&params);
    sig.add_sequence(b"ATGC", false).unwrap();

    assert_eq!(sig.size(), 3);
    let sketches = sig.sketches();
    dbg!(&sketches);
    assert_eq!(sketches[0].size(), 3);
    assert_eq!(sketches[1].size(), 2);
    assert_eq!(sketches[2].size(), 1);
}

#[test]
fn signature_slow_path() {
    let params = ComputeParameters {
        ksizes: vec![2, 3, 4, 5],
        num_hashes: 3,
        ..Default::default()
    };

    let mut sig = Signature::from_params(&params);
    sig.add_sequence(b"ATGCTN", true).unwrap();

    assert_eq!(sig.size(), 4);
    let sketches = sig.sketches();
    dbg!(&sketches);
    assert_eq!(sketches[0].size(), 3);
    assert_eq!(sketches[1].size(), 3);
    assert_eq!(sketches[2].size(), 2);
    assert_eq!(sketches[3].size(), 1);
}

#[test]
fn signature_add_sequence_protein() {
    let params = ComputeParameters {
        ksizes: vec![3, 6],
        num_hashes: 3,
        protein: true,
        dna: false,
        ..Default::default()
    };

    let mut sig = Signature::from_params(&params);
    sig.add_sequence(b"ATGCAT", false).unwrap();

    assert_eq!(sig.size(), 2);
    let sketches = sig.sketches();
    dbg!(&sketches);
    assert_eq!(sketches[0].size(), 3);
    assert_eq!(sketches[1].size(), 1);
}

#[test]
fn signature_add_protein() {
    let params = ComputeParameters {
        ksizes: vec![3, 6],
        num_hashes: 3,
        protein: true,
        dna: false,
        ..Default::default()
    };

    let mut sig = Signature::from_params(&params);
    sig.add_protein(b"AGY").unwrap();

    assert_eq!(sig.size(), 2);
    let sketches = sig.sketches();
    dbg!(&sketches);
    assert_eq!(sketches[0].size(), 3);
    assert_eq!(sketches[1].size(), 2);
}
