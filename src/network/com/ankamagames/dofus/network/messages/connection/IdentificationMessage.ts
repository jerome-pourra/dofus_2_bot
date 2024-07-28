import { Version } from "./../../types/version/Version";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../jerakine/network/utils/BooleanByteWrapper";

export class IdentificationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9262;

	public version: Version;
	public lang: string = "";
	public credentials: Array<number>;
	public serverId: number = 0;
	public autoconnect: boolean = false;
	public useCertificate: boolean = false;
	public useLoginToken: boolean = false;
	public sessionOptionalSalt: number = 0;
	public failedAttempts: Array<number>;

    public constructor()
    {
        super();
        this.version = new Version();
        this.credentials = Array<number>();
        this.failedAttempts = Array<number>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IdentificationMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.autoconnect = BooleanByteWrapper.getFlag(_box0,0);
        this.useCertificate = BooleanByteWrapper.getFlag(_box0,1);
        this.useLoginToken = BooleanByteWrapper.getFlag(_box0,2);
    }

    private deserializeAs_IdentificationMessage(input: ICustomDataInput)
    {
        let _val3: number = 0;
        let _val9: number = 0;
        this.deserializeByteBoxes(input);
        this.version = new Version();
        this.version.deserialize(input);
        this._langFunc(input);
        let _credentialsLen: number = input.readVarInt();
        for(let _i3: number = 0; _i3 < _credentialsLen; _i3++)
        {
            _val3 = input.readByte();
            this.credentials.push(_val3);
        }
        this._serverIdFunc(input);
        this._sessionOptionalSaltFunc(input);
        let _failedAttemptsLen: number = input.readUnsignedShort();
        for(let _i9: number = 0; _i9 < _failedAttemptsLen; _i9++)
        {
            _val9 = input.readVarUhShort();
            if(_val9 < 0)
            {
                throw new Error("Forbidden value (" + _val9 + ") on elements of failedAttempts.");
            }
            this.failedAttempts.push(_val9);
        }
    }

    private _langFunc(input: ICustomDataInput)
    {
        this.lang = input.readUTF();
    }

    private _serverIdFunc(input: ICustomDataInput)
    {
        this.serverId = input.readShort();
    }

    private _sessionOptionalSaltFunc(input: ICustomDataInput)
    {
        this.sessionOptionalSalt = input.readVarLong();
        if(this.sessionOptionalSalt < -9007199254740992 || this.sessionOptionalSalt > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sessionOptionalSalt + ") on element of IdentificationMessage.sessionOptionalSalt.");
        }
    }

}